import React from 'react';
import '../css/penguinWave.css';

function PenguinWave() {
  return (
    <div class="wpenguin">
      <div class="wpenguin-bottom">
        <div class="wright-hand"></div>
        <div class="wleft-hand"></div>
        <div class="wright-feet"></div>
        <div class="wleft-feet"></div>
      </div>
      <div class="wpenguin-top">
        <div class="wright-cheek"></div>
        <div class="wleft-cheek"></div>
        <div class="wbelly"></div>
        <div class="wright-eye">
          <div class="wsparkle"></div>
        </div>
        <div class="wleft-eye">
          <div class="wsparkle"></div>
        </div>
        <div class="wblush-right"></div>
        <div class="wblush-left"></div>
        <div class="wbeak-top"></div>
        <div class="wbeak-bottom"></div>
      </div>
    </div>
  )
}
export default PenguinWave;