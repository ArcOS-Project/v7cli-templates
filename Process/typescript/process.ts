class proc extends ThirdPartyProcess {
  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    operationId: string,
    workingDirectory: string,
    ...args: any[]
  ) {
    super(pid, parentPid, app, operationId, workingDirectory);
  }

  async onStarted(): Promise<any> {
    /* Do some interesting stuff here */
    this.myAmazingFunction();
  }

  myAmazingFunction(): void {
    // Check if the process is disposed at the top of every method. This makes sure the process has the least amount of lasting effects.
    if (this._disposed) return;

    Debug("Working!");
  }
}

export default proc;
