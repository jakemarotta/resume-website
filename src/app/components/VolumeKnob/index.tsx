import React, { useCallback, useEffect, useState } from 'react';

import volumeKnob from '@/assets/images/volume-knob.png';

export interface VolumeKnobProps {
  sensitivity?: number;
  width?: number;
}

export const VolumeKnob: React.FC<VolumeKnobProps> = (props) => {
  const { sensitivity = 10, width = 150 } = props;

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragPositiontX, setDragPositionX] = useState<number>(0);
  const [rotateDegrees, setRotateDegrees] = useState<number>(0);

  const onMouseUp =(e: MouseEvent|TouchEvent) => {
    setIsDragging(false);
    setDragPositionX(0);
    removeWindowListeners();
  }

  const onMouseMove = useCallback((e: MouseEvent|TouchEvent) => {
    let xPosition: number;
    if ('touches' in e) {
      const event = e as TouchEvent;
      xPosition = event.touches[0].pageX;
    } else {
      const event = e as MouseEvent;
      xPosition = event.clientX;
    }
    const xDelta = dragPositiontX - xPosition;
    setDragPositionX(xPosition);
    setRotateDegrees(rotateDegrees - ((xDelta / 10) * sensitivity));
  }, [isDragging]);

  const onMouseDown = (e: React.MouseEvent) => {
    setDragPositionX(e.clientX);
    setIsDragging(true);
    addWindowListeners();
  }

  const addWindowListeners = () => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchend', onMouseUp);
    window.addEventListener('touchmove', onMouseMove);
  }

  const removeWindowListeners = () => {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('touchend', onMouseUp);
    window.removeEventListener('touchmove', onMouseMove);
  }

  useEffect(() => {
    return () => {
      removeWindowListeners();
    };
  }, []);

  return (
    <img
      src={volumeKnob}
      alt="Volume Knob"
      width={width}
      draggable={false}
      onMouseDown={onMouseDown}
      style={{
        transform: `rotate(${rotateDegrees}deg)`,
      }}
    />
  )
}