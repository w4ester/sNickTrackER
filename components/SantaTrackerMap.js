'use client';

<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from 'react-leaflet';
import { Globe, Gift, Clock, Plus, Trash2, AlertTriangle, Loader } from 'lucide-react';
import L from 'leaflet';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Santa icon
=======
// ... [previous imports remain the same]

// Update the Santa icon to use SVG
>>>>>>> c30e78d (Add package-lock.json)
const santaIcon = new L.Icon({
  iconUrl: '/santa-icon.svg',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

<<<<<<< HEAD
[rest of SantaTrackerMap.js content]
=======
// ... [rest of the file remains exactly the same]
>>>>>>> c30e78d (Add package-lock.json)
