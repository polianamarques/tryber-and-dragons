import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static createdInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    Dwarf.createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;