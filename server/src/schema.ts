import { Schema, type, MapSchema, ArraySchema } from '@colyseus/schema';

export class Player extends Schema {
 @type('string') name='Survivor'; @type('number') x=2; @type('number') z=2; @type('number') yaw=0;
 @type('boolean') ready=false; @type('boolean') alive=true; @type('boolean') hidden=false; @type('boolean') escaped=false;
 @type('number') stamina=6; @type('string') color='#aab2bc'; @type('boolean') flashlight=true;
}
export class Monster extends Schema { @type('string') kind='spider'; @type('number') x=2; @type('number') z=2; @type('string') mode='patrol'; }
export class Doll extends Schema { @type('number') x=2; @type('number') z=2; }
export class GameState extends Schema {
 @type({map:Player}) players=new MapSchema<Player>(); @type({map:'boolean'}) searched=new MapSchema<boolean>();
 @type({map:'boolean'}) keyDrawers=new MapSchema<boolean>(); @type({map:Monster}) monsters=new MapSchema<Monster>();
 @type([Doll]) dolls=new ArraySchema<Doll>(); @type('string') phase='lobby'; @type('string') hostId=''; @type('number') keys=0;
 @type('boolean') exitOpen=false; @type('string') blackout='normal'; @type('number') blackoutEnds=0; @type('number') startedAt=0;
 @type('string') winner='';
}
