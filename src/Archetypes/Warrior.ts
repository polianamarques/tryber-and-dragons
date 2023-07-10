import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static createdInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;