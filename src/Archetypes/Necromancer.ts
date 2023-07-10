import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static createdInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;