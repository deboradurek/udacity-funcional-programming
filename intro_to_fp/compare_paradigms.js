// Rewriten the original imperative code as Object-Oriented

function StatusReport(name) {
  (this.name = name ? name : 'Captain'),
    (this.type = 'Dilithium Chrystal'),
    (this.status = 'active'),
    (this.warp = 2),
    (this.generateStatusReport = function () {
      if (this.status === 'active' && this.warp <= 4) {
        return `${this.name}, the engines are active and we could be going faster.`;
      } else if (this.status === 'active' && this.warp > 4) {
        return `${this.name}, the engines are active and we are going ${this.warp}.`;
      } else if (this.status === 'down') {
        return `${this.name}, the engines are down.`;
      } else {
        return `${this.name}, the comms are down and we can't reach engineering.`;
      }
    });
  this.setStatus = function (status) {
    this.status = status;
  };
  this.setWarp = function (warp) {
    this.warp = warp;
  };
}

const statusReportCheck = new StatusReport();

console.log(statusReportCheck.generateStatusReport());

statusReportCheck.setStatus('inactive');
console.log(statusReportCheck.status);

statusReportCheck.setWarp(5);
console.log(statusReportCheck.warp);
