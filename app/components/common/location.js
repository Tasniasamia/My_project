"use client"

import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Form, notification } from "antd";
import { useEffect, useState } from "react";
import { MdOutlineMyLocation } from "react-icons/md";

const LocationInput = ({ country, rules, className,name }) => {
    const { isLoaded: isGoogleMapLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.google_map_api_key,
        libraries: ["places"]

    })
    return (
        <>
        <Form.Item
        name={name}
        label="Address"
        rules={rules}
        className={`mb-5 ${className}`}
        initialValue={{
        name: '',
        lat: '',
        lng: ''
        }}
        >
        {isGoogleMapLoaded && <MapSelector country={country} />}
        </Form.Item>
        </>
    )
}

export default LocationInput


export const MapSelector = ({ value, onChange, country, height = 300 }) => {
    const [zoom, setZoom] = useState(10);
    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523
    })



    useEffect(() => {
        if (!!value?.lat && !!value?.lng) {
            setCenter({
                lat: value?.lat,
                lng: value?.lng
            })
            setZoom(13)
        }

    }, [value])

    const [autocomplete, setAutocomplete] = useState(null);



    return (

        <>
       <div className="relative">
                <Autocomplete
                onLoad={setAutocomplete}
                onPlaceChanged={() => {
                let addressObject = autocomplete.getPlace();
                onChange({
                name: addressObject.formatted_address,
                lat: addressObject.geometry.location.lat(),
                lng: addressObject.geometry.location.lng(),
                country: addressObject.address_components.find((c) => c.types.includes('country'))?.short_name,
                country_long: addressObject.address_components.find((c) => c.types.includes('country'))?.long_name,
                city: addressObject.address_components.find((c) => c.types.includes('locality'))?.long_name,
                 })
                }}
                children={<input
                        className="border w-full rounded-md h-10 pl-2 mb-4 !pr-10"
                        value={value?.name}
                        onChange={(e) => {
                            onChange({
                                ...value,
                                name: e.target.value,
                            })
                        }}
                    />}
                />
    
            </div>


            <GoogleMap
                mapContainerStyle={{
                    width: "100%",
                    height: height,
                    borderRadius: 5,
                    marginBottom: 8
                }}
                className="rounded"
                center={center}
                zoom={zoom}
                options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                    fullscreenControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    zoomControlOptions: {
                        position: 9

                    }
                }}
            >
                {value?.lat && value?.lng && <Marker 
                position={{
                    lat: value?.lat,
                    lng: value?.lng
                }} 
                draggable={true} 
              />}

            </GoogleMap>

        </>

    )
}