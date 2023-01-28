Object.defineProperty(Array.prototype, 'mapComp', {
  value: function (callbackFn) {
    return this.map(callbackFn).join('');
  },
});

// Store object and helpers
let store = {
  rovers: undefined,
};

const updateStore = (newState) => {
  store = Object.assign(store, newState);
  render(root);
};

const withStore = (component) => (selectors) => {
  return (props) => {
    const storeResult = Object.entries(selectors).reduce(
      (acc, [key, callbackFn]) => ({
        ...acc,
        [key]: callbackFn(store),
      }),
      {}
    );

    return component({ ...props, ...storeResult });
  };
};

// add our markup to the page
const root = document.getElementById('root');

const render = async (root) => {
  root.innerHTML = App();
};

// create content
const App = () => {
  return `
    <header class="pb-3 mb-4 border-bottom">
      <span class="fs-4">Mars Dashboard</span>
    </header>
    <main>
      <section>
        ${RoversTabs()}
      </section>
    </main>
    <footer></footer>
    `;
};

// listening for load event because page should load before any JS is called
window.addEventListener('load', () => {
  render(root);
});
// ------------------------------------------------------  COMPONENTS
const RoverImage = ({ photo, index, total }) => {
  return `
    <img src="${photo}" height="300" class="rounded-start w-100">
    <div class="carousel-caption d-none d-md-block">
      <h5>${index + 1} from ${total}</h5>
    </div>
  `;
};

const RoverContent = ({ rover }) => {
  return `
    <div class="pt-4">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            ${Carousel({
              id: `carousel-${rover.id}`,
              items: rover.photos.map((photo, index) =>
                RoverImage({ photo, index, total: rover.photos.length })
              ),
            })}
          </div>
          <div class="col-md-8">
            <div class="card-body h-100 d-flex flex-column">
              <div class="flex-grow-1">
                <h5 class="card-title">${rover.name} rover</h5>
                <p class="card-text fw-semibold text-primary-emphasis">
                  ${rover.status}
                </p>
              </div>
              <span class="card-text mt-2">
                <small class="text-muted">Launch at ${rover.launch_date}</small>
              </span>
              <span class="card-text">
                <small class="text-muted">Landing at ${rover.landing_date}</small>
              </span>
              <span class="card-text">
                <small class="text-muted">Photos from ${rover.max_date}</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const RoversPlaceholder = () => {
  return `
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <p class="nav-link active placeholder-glow" style="width: 100px">
          <span class="placeholder col-12"></span>
        </p>
      </li>
    </ul>
    <div class="tab-content">
      <div class="pt-4">
        <div class="card mb-3" aria-hidden="true">
          <div class="row g-0">
            <div class="col-md-4">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
            </div>
            <div class="col-md-8">
              <div class="card-body h-100 d-flex flex-column">
                <div class="flex-grow-1">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-4"></span>
                  </h5>
                  <p class="card-text placeholder-glow">
                    <span class="placeholder col-2"></span>
                  </p>
                </div>
                <span class="card-text mt-2 placeholder-glow">
                  <span class="placeholder col-4"></span>
                </span>
                <span class="card-text placeholder-glow">
                  <span class="placeholder col-4"></span>
                </span>
                <span class="card-text placeholder-glow">
                  <span class="placeholder col-4"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const _RoversTabs = ({ rovers }) => {
  if (!rovers) {
    getRovers();
    return RoversPlaceholder();
  }

  const tabs = rovers.map((rover, index) => ({
    id: rover.name,
    title: rover.name,
    content: RoverContent({ rover }),
    isSelected: index === 0,
  }));

  return Tabs({ id: 'rovers', tabs });
};

const RoversTabs = withStore(_RoversTabs)({ rovers: (state) => state.rovers });

// ------------------------------------------------------  REUSABLE COMPONENTS
const CarouselItem = ({ content, isActive }) => {
  return `
    <div class="carousel-item ${isActive ? 'active' : ''}">
      ${content}
    </div>
  `;
};

const Carousel = ({ id, items }) => {
  return `
    <div id="${id}" class="carousel slide">
      <div class="carousel-inner">
        ${items.mapComp((content, index) => CarouselItem({ content, isActive: index === 0 }))}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
};

const TabItem = ({ id, title, isSelected }) => {
  return `
    <li class="nav-item" role="presentation">
      <button
        class="nav-link ${isSelected ? 'active' : ''}"
        id="${id}-tab"
        data-bs-toggle="tab"
        data-bs-target="#${id}-tab-pane"
        type="button" role="tab"
        aria-controls="${id}-tab-pane"
        aria-selected="${isSelected ? 'true' : 'false'}">
        <h6>${title}</h6>
      </button>
    </li>
    `;
};

const TabContent = ({ id, content, isSelected }) => {
  return `
    <div
      class="tab-pane fade ${isSelected ? 'show active' : ''}"
      id="${id}-tab-pane" role="tabpanel"
      aria-labelledby="home-tab"
      tabindex="0">
      ${content}
    </div>
  `;
};

const Tabs = ({ id, tabs }) => {
  return `
    <ul class="nav nav-tabs" id="${id}-tab" role="tablist">
      ${tabs.mapComp((tab) => TabItem(tab))}
    </ul>
    <div class="tab-content" id="${id}-tab-content">
      ${tabs.mapComp((tab) => TabContent(tab))}
    </div>
  `;
};

// ------------------------------------------------------  API CALLS

const getRovers = () => {
  fetch(`http://localhost:3000/rovers`)
    .then((res) => res.json())
    .then((rovers) => updateStore({ rovers }));
};
