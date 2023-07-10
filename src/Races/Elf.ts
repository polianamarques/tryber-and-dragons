import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static createdInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    Elf.createdInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return this.createdInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
  
export default Elf;