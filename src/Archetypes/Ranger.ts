import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static createdInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;