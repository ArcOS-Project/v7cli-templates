class proc extends ThirdPartyProcess {
  constructor(pid, parentPid, app, operationId, workingDirectory, ...args
  ) {
    super(pid, parentPid, app, operationId, workingDirectory);
  }

  async start() {
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
