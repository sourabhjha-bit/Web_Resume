import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-googlemap',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './googlemap.component.html',
  styleUrl: './googlemap.component.css',
})
export class GooglemapComponent implements OnInit {
  display: any;
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  zoom = 4;
  locations: Array<{ lat: number; lng: number; title: string }> = [];

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.locations = [
        { lat: position.coords.latitude, lng: position.coords.longitude, title: 'Current location' },
        {lat: 28.545057, lng: 77.259577, title: 'Studied' }
      ];
    });
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) {
      this.center = event.latLng.toJSON();
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng !== null) {
      this.center = event.latLng.toJSON();
    }
  }
}
