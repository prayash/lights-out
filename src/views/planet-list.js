import React from 'react'
import { addPlanet } from '../actions/planets'
import ActionButton from 'microcosm/addons/action-button'

export default function PlanetList({ planets = [] }) {
  
  return (
    <div>
      <ul>
        { planets.map(p => <li key={p}>{p}</li>) }
      </ul>

      <ActionButton action={addPlanet} value='Alpha Centauri'>
        Add Planet
      </ActionButton>
    </div>
  )
}