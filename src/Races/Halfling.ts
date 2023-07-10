import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static createdInstances = 0;

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    Halfling.createdInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return this.createdInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
  
export default Halfling;