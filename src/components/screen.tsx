import { CanvasSpace, Const, Create, Group, Line, Pt } from 'pts';
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'react-feather';

export const Screen = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;

    const colors = ['1', '2', '3'].map(variant =>
      getComputedStyle(document.documentElement).getPropertyValue(`--canvas-point-color-${variant}`)
    );
    const space = new CanvasSpace(canvasRef.current).setup({
      bgcolor: getComputedStyle(document.documentElement).getPropertyValue('--canvas-bg'),
      retina: true,
      resize: true,
    });
    let pts: Group;
    let brightnesses: number[];
    const form = space.getForm();

    space.add({
      start() {
        pts = Create.distributeRandom(space.innerBound, window.innerWidth * 0.08);
        brightnesses = new Array(pts.length).fill(0.1);
      },
      animate() {
        console.log(space.pointer);
        pts.forEach((pt, i) => {
          pt.rotate2D(Const.one_degree / 20, space.center);
          const path = [new Pt(0, -(window.innerWidth * 0.5)), new Pt(space.size.x, 0)];
          const line = [pt, Line.perpendicularFromPt(path, pt)];
          if (Math.abs(Line.distanceFromPt(line, space.pointer)) < 50) {
            if (brightnesses[i] < 0.3) {
              brightnesses[i] += 0.015;
            }
          } else {
            if (brightnesses[i] > 0.1) {
              brightnesses[i] -= 0.01;
            }
          }

          form
            .fillOnly(colors[i % 3])
            .point(pt, 1, 'circle')
            .stroke(`rgba(255, 255, 255, ${brightnesses[i]})`, 1)
            .fill(true)
            .line(line);
        });
      },
    });
    space.bindMouse(true).play();
  }, [canvasRef]);

  return (
    <div className='h-full relative flex justify-center items-center'>
      <canvas id='canvas' className='h-full screen-canvas' ref={canvasRef}>
        Your browser does not support HTML5 canvas
      </canvas>
      <div className='absolute flex flex-col text-4xl justify-center items-center text-white'>
        <div className='flex flex-col'>
          <span>
            Hi, I&lsquo;m <span className='text-name'>Nguyễn Đình Hải</span>
          </span>
          <span>Full-Stack Web Developer</span>
        </div>

        <div className='main-button font-medium'>
          <span className='mr-3'>View my work</span>
          <ArrowRight className='main-arrow' size={20} />
        </div>
      </div>
    </div>
  );
};
