import { FC } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;
  const waves = {
    frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgb(0, 200, 248, 0.3)'),
    backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgb(255, 202, 31, 0.3)'),
  };

  const render = () => {
    context?.clearRect(0, 0, width, height);
    Object.entries(waves).forEach(([, wave]) => {
      wave.draw(context!, width, height, frequency);
    });
    frequency += 0.013;
    requestAnimationFrame(render);
  };
  if (context) render();
  return null;
};

export default Wave;
