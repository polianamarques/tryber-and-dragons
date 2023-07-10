import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static createdInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    Orc.createdInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return this.createdInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
  
export default Orc;