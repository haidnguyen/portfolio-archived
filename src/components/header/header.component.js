import React, { useEffect, useState } from 'react';
import {
  CanvasSpace,
  Pt,
  Line,
  Const,
  Create
} from 'pts';
import { ArrowRight } from 'react-feather';
import { Hightlight } from '..';
import { Wrapper, Container, Canvas, TextSection, Button } from './header.styles';

const Header = props => {
  const [space, setSpace] = useState(null);
  

  useEffect(() => {
    setSpace(
      new CanvasSpace('#canvas').setup({
        bgcolor: '#252934',
        retina: true,
        resize: true
      })
    );
  }, []);

  useEffect(() => {
    const loadCanvas = () => {
      const form = space.getForm();
      let pts = null;
      let brightness = null;
      const colors = ['#FF3F8E', '#04C2C9', '#2E55C1'];
  
      space.add({
        start: bound => {
          pts = Create.distributeRandom(
            space.innerBound,
            window.innerWidth * 0.05
          );
          brightness = pts.map(p => 0.1);
        },
  
        animate: (time, fps) => {
          pts.forEach((p, i) => {
            p.rotate2D(Const.one_degree / 20, space.center);
            let point = new Pt(0, -(window.innerWidth * 0.5));
            let path = [point, new Pt(space.size.x, 0)];
            const line = [p, Line.perpendicularFromPt(path, p)];
            const distanceFromMouse = Math.abs(
              Line.distanceFromPt(line, space.pointer)
            );
  
            if (distanceFromMouse < 50) {
              if (brightness[i] < 0.3) {
                brightness[i] += 0.015;
              }
            } else {
              if (brightness[i] > 0.1) {
                brightness[i] -= 0.01;
              }
            }
  
            form.fillOnly(colors[i % 3]).point(p, 1, 'circle');
            form
              .stroke(`rgba(255, 255, 255, ${brightness[i]})`, 1)
              .fill(true)
              .line(line);
          });
        }
      });
      space.bindMouse().play();
    };

    if (space) {
      loadCanvas();
    }
  }, [space]);

  return (
    <Wrapper {...props}>
      <Canvas id='canvas'>Your browser does not support HTML5 canvas</Canvas>
      <Container>
        <TextSection>
          Hi, I'm <Hightlight>Nguyễn Đình Hải</Hightlight>.
          <br/>
          Front-end Web Developer.
        </TextSection>

        <Button>
          View my work <ArrowRight size={20}/>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Header;
