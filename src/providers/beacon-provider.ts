import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { IBeacon } from 'ionic-native';

@Injectable()
export class BeaconProvider {

delegate: any;
region: any;

constructor(public platform: Platform, public events: Events) {
}

initialise(): any {
let promise = new Promise((resolve, reject) => {
// we need to be running on a device
if (this.platform.is('cordova')) {

// Request permission to use location on iOS
IBeacon.requestAlwaysAuthorization();

// create a new delegate and register it with the native layer
this.delegate = IBeacon.Delegate();

// Subscribe to some of the delegate’s event handlers
this.delegate.didRangeBeaconsInRegion()
.subscribe(
data => {
this.events.publish('didRangeBeaconsInRegion', data);
},
error => console.error()
);

// setup a beacon region – CHANGE THIS TO YOUR OWN UUID
this.region = IBeacon.BeaconRegion("estimode", "ebefd083-70a2-47c8-9837-e7b5634df557");

// start ranging
IBeacon.startRangingBeaconsInRegion(this.region)
.then(
() => {
resolve(true);
},
error => {
console.error("Failed to begin monitoring: ", error);
resolve(false);
}
);
} else {
console.error("This application needs to be running on a device");
resolve(false);
}
});

return promise;
}
}