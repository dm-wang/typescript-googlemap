/**
 * Instructions to every other class
 * on how they can be an argument to 'addMarker'
 */
export interface Mappable {
   location: {
       lat: number;
       lng: number;
   };
   markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map

    /* add in an argument to make this more usable. when create a new instance of CustomMap, 
    you have to pass in a div classname, and this classname will be passed into constructor function
    and then be passed into google.maps.Maps */
    constructor (divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng:0
            }
        });
    }

    addMarker (mappable: Mappable):void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        })
    }
}