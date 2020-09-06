import React from 'react';
import { ContentBlock, SpanItem } from 'components';
import {
  Home,
  Bell,
  Terminal,
  Code,
  Mail,
  Phone,
  Linkedin,
  GitHub,
  User,
  Book,
  Briefcase,
  Activity,
  Disc,
} from 'react-feather';
import TranslateIcon from '../../assets/translate.svg';
import EducationIcon from '../../assets/education.svg';

const CVPage: React.FC = () => {
  return (
    <div className='bg-gray-400 p-8 cv-container'>
      <div className='mx-auto max-w-4xl cv-container'>
        <header className='flex flex-col border-b-2 border-pink-400'>
          <div className='py-8 bg-gray-800 flex justify-center items-center'>
            <span className='text-4xl text-white font-medium'>Nguyễn Đình Hải</span>
          </div>
          <div className='py-2 flex justify-center items-center bg-gray-100'>
            <span className='text-gray-500 font-medium'>Software Engineer</span>
          </div>
        </header>
        <main className='p-4 grid grid-cols-11 gap-4 cv-main'>
          <section className='flex flex-col col-span-4'>
            <ContentBlock label='Contact' icon={<Bell size={16} className='text-white' />}>
              <div className='grid grid-cols-1 gap-3'>
                <div className='flex items-center'>
                  <Home className='text-pink-400' size={16} />
                  <span className='ml-4 text-xs'>23/38 No Trang Long, HCMC</span>
                </div>
                <div className='flex items-center'>
                  <Mail className='text-pink-400' size={16} />
                  <span className='ml-4 text-xs'>dinhhai281@gmail.com</span>
                </div>
                <div className='flex items-center'>
                  <Phone className='text-pink-400' size={16} />
                  <span className='ml-4 text-xs'>(+84) 0886 511 763</span>
                </div>
                <div className='flex items-center'>
                  <Linkedin className='text-pink-400' size={16} />
                  <span className='ml-4 text-xs'>ndhai</span>
                </div>
                <div className='flex items-center'>
                  <GitHub className='text-pink-400' size={16} />
                  <span className='ml-4 text-xs'>github.com/dinhhai281</span>
                </div>
                <div className='flex items-center'>
                  <User className='text-pink-400' size={16} />
                  <span className='ml-4 text-xs'>dinhhai281.github.io</span>
                </div>
                <div className='flex items-center'>
                  <Book className='text-pink-400' size={16} />
                  <span className='ml-4 text-xs'>dinhhai281.github.io/blog</span>
                </div>
              </div>
            </ContentBlock>
            <ContentBlock label='Profile' icon={<Terminal size={16} className='text-white' />}>
              <div className='text-xs'>
                A Highly motivated software engineer can work with both Angular and React. A big fan of Functional
                Programming and Reactive Programming (RxJS). I also have a blog where I write everything I want but
                mostly about programming. My goal is that someday I can make a significant contribution to Open Source
                community.
              </div>
            </ContentBlock>
            <ContentBlock label='Skills' icon={<Code size={16} className='text-white' />}>
              <div className='grid grid-cols-1 gap-4'>
                <span className='text-xs'>- JavaScript/TypeScript</span>
                <span className='text-xs'>- HTML & CSS/SCSS/PostCSS</span>
                <span className='text-xs'>- React</span>
                <span className='text-xs'>- Angular</span>
                <span className='text-xs'>- Redux/Ngrx</span>
                <span className='text-xs'>- RxJS</span>
                <span className='text-xs'>- Functional Programming</span>
              </div>
            </ContentBlock>
            <ContentBlock label='Language' icon={<TranslateIcon />}>
              <div className='grid grid-cols-1'>
                <span className='text-xs'>
                  - English: TOEIC <em>730</em>
                </span>
              </div>
            </ContentBlock>
          </section>

          <section className='flex flex-col col-span-7'>
            <ContentBlock label='Education' icon={<EducationIcon />}>
              <SpanItem label='Uniservity of Science Ho Chi Minh City' sub='9/2015 - 9/2019'>
                <div className='italic font-semibold'>Major: Software Engineering</div>
                <em>GPA:8.03</em>
              </SpanItem>
            </ContentBlock>
            <ContentBlock label='Work Experience' icon={<Briefcase size={16} className='text-white' />}>
              <SpanItem sub='8/2019 - Present' label='KMS Technology'>
                <div className='italic font-semibold'>Software Engineer</div>
                <span>
                  Mostly work with Angular and React as Front-End Developer. Occasionally work as full-stack with Golang
                  and Node.js for back-end in some internal projects.
                </span>
              </SpanItem>
              <SpanItem sub='6/2018 - 9/2018' label='Ant Tech'>
                <div className='italic font-semibold'>Front-End Developer Intern</div>
                <span>Using Angular to transform design prototype to high performance web applications.</span>
              </SpanItem>
            </ContentBlock>
            <ContentBlock label='Projects' icon={<Activity size={16} className='text-white' />}>
              <SpanItem sub='12/2019 - Present' label='Elemica - Capture'>
                <div className='italic font-semibold'>Role: Front-End Lead</div>
                <div>Angular, TypeScript, Java, Play, PostgreSQL</div>
                <div className='grid grid-cols-1 gap-3'>
                  <div className='flex'>
                    <div className='w-3'>
                      <Disc className='text-pink-400 mt-1' size={12} />
                    </div>
                    <span className='ml-2 text-xs'>
                      Lead a team of two developers (1 junior, 1 senior) and provide high level estimation.
                    </span>
                  </div>
                  <div className='flex'>
                    <div className='w-3'>
                      <Disc className='text-pink-400 mt-1' size={12} />
                    </div>
                    <span className='ml-2 text-xs'>Define pattern and solution for front-end.</span>
                  </div>
                  <div className='flex'>
                    <div className='w-3'>
                      <Disc className='text-pink-400 mt-1' size={12} />
                    </div>
                    <span className='ml-2 text-xs'>Review front-end code and provide guidelines.</span>
                  </div>
                  <div className='flex'>
                    <div className='w-3'>
                      <Disc className='text-pink-400 mt-1' size={12} />
                    </div>
                    <span className='ml-2 text-xs'>Implement features follow Scrum.</span>
                  </div>
                </div>
              </SpanItem>

              <SpanItem sub='8/2019 - 12/2019' label="Christina's">
                <div className='italic font-semibold'>Role: Front-End Developer</div>
                <div>React, Python, Django, PostgreSQL</div>
                <div className='grid grid-cols-1 gap-3'>
                  <div className='flex'>
                    <div className='w-3'>
                      <Disc className='text-pink-400 mt-1' size={12} />
                    </div>
                    <span className='ml-2 text-xs'>Analyze UI design and provide solution.</span>
                  </div>
                  <div className='flex'>
                    <div className='w-3'>
                      <Disc className='text-pink-400 mt-1' size={12} />
                    </div>
                    <span className='ml-2 text-xs'>Implement features follow Scrum.</span>
                  </div>
                  <div className='flex'>
                    <div className='w-3'>
                      <Disc className='text-pink-400 mt-1' size={12} />
                    </div>
                    <span className='ml-2 text-xs'>Work heavily with anything that relating to animation.</span>
                  </div>
                </div>
              </SpanItem>
            </ContentBlock>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CVPage;
