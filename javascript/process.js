const html = await loadHtml("body.html");

class proc extends ThirdPartyAppProcess {
  constructor(pid, parentPid, app, operationId, workingDirectory, ...args) {
    super(pid, parentPid, app, operationId, workingDirectory);
  }

  async render() {
    const body = this.getBody();
    body.innerHTML = html;

    /* Do some interesting stuff here */
    this.myAmazingFunction();
  }

  myAmazingFunction() {
    // Check if the process is disposed at the top of every method. This makes sure the process has the least amount of lasting effects.
    if (this._disposed) return;

    Debug("Working!");
  }
}

return proc;
