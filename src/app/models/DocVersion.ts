export class DocVersion {

  // Wichtig alles klein ansosnten funktioniert es nicht
  constructor(
    public vtimestamp: string,
    public file: FormData,
    public dokumentdid: number,
    public fileformatidfid: number,
  ) {  }

}
