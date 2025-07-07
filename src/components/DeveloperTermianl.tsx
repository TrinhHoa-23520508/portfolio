import React, { useState, useEffect } from 'react';
import type { DeveloperProfile } from '@/types/type';
import { ThemeColor } from '@/utils/ColorsConstant';

interface IProps {
  developer: DeveloperProfile;
}

const DeveloperTerminal: React.FC<IProps> = ({ developer }) => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const CodeLine: React.FC<{ children: React.ReactNode; indent?: number }> = ({ children, indent = 0 }) => (
    <div
      className={`font-mono text-sm leading-relaxed rounded-sm py-1 px-1 
                transition-transform duration-300 ease-out 
                hover:bg-white/5 hover:translate-x-[2px] ${indent === 1
          ? 'ml-5'
          : indent === 2
            ? 'ml-10'
            : indent === 3
              ? 'ml-15'
              : indent === 4
                ? 'ml-20'
                : ''
        }`}
    >
      {children}
    </div>
  );



  const Keyword: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-pink-400 font-bold">{children}</span>
  );
  const Property: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-black dark:text-white">{children}</span>
  );
  const String: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-pink-500">{children}</span>
  );
  const Boolean: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-sky-400 dark:text-green-400">{children}</span>
  );
  const Function: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-sky-400 dark:text-green-300">{children}</span>
  );
  const Operator: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-black dark:text-white">{children}</span>
  );
  const Number: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-red-400">{children}</span>
  );

  return (
    <div className={` flex items-center justify-center p-4`}>
      <div className="w-full max-w-4xl">
        <div className={`${ThemeColor.background} rounded-lg border-2 border-black/5 dark:border-red-500 shadow-2xl overflow-hidden animate-pulse-glow`}>
          {/* Header */}
          <div className={`${ThemeColor.background} px-6 py-3 flex items-center gap-3 border-b border-gray-600`}>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></span>
            </div>
            <div className="text-black dark:text-gray-400 text-sm font-mono ml-4">~/developer-profile.js</div>
          </div>

          {/* Terminal Body */}
          <div className={`${ThemeColor.background} p-8 relative overflow-hidden`}>

            {/* Code Content */}
            <div className="relative z-10 text-gray-100">
              <CodeLine>
                <Keyword>const</Keyword> <Property>developer</Property> <Operator>=</Operator> <Operator>{'{'}</Operator>
              </CodeLine>

              <CodeLine indent={1}>
                <Property>name</Property>
                <Operator>:</Operator> <String>{`'${developer.name}'`}</String>
                <Operator>,</Operator>
              </CodeLine>

              <CodeLine indent={1}>
                <Property>skills</Property>
                <Operator>:</Operator> <Operator>[</Operator>
                {developer.skills.map((skill, idx) => (
                  <React.Fragment key={idx}>
                    <String>{`'${skill}'`}</String>
                    {idx !== developer.skills.length - 1 && <Operator>, </Operator>}
                  </React.Fragment>
                ))}
                <Operator>]</Operator>
                <Operator>,</Operator>
              </CodeLine>

              <CodeLine indent={1}>
                <Property>hardWorker</Property>
                <Operator>:</Operator> <Boolean>{developer.hardWorker ? 'true' : 'false'}</Boolean>
                <Operator>,</Operator>
              </CodeLine>

              <CodeLine indent={1}>
                <Property>quickLearner</Property>
                <Operator>:</Operator> <Boolean>{developer.quickLearner ? 'true' : 'false'}</Boolean>
                <Operator>,</Operator>
              </CodeLine>

              <CodeLine indent={1}>
                <Property>problemSolver</Property>
                <Operator>:</Operator> <Boolean>{developer.problemSolver ? 'true' : 'false'}</Boolean>
                <Operator>,</Operator>
              </CodeLine>

              <CodeLine indent={1}>
                <Function>hireable</Function>
                <Operator>:</Operator> <Keyword>function</Keyword>
                <Operator>() {'{'}</Operator>
              </CodeLine>

              <CodeLine indent={2}>
                <Keyword>return</Keyword> <Operator>(</Operator>
              </CodeLine>
              <CodeLine indent={3}>
                <Keyword>this</Keyword>
                <Operator>.</Operator>
                <Property>hardWorker</Property> <Operator>&&</Operator>
              </CodeLine>
              <CodeLine indent={3}>
                <Keyword>this</Keyword>
                <Operator>.</Operator>
                <Property>problemSolver</Property> <Operator>&&</Operator>
              </CodeLine>
              <CodeLine indent={3}>
                <Keyword>this</Keyword>
                <Operator>.</Operator>
                <Property>skills</Property>
                <Operator>.</Operator>
                <Property>length</Property> <Operator>&gt;=</Operator> <Number>5</Number>
              </CodeLine>
              <CodeLine indent={2}>
                <Operator>);</Operator>
              </CodeLine>

              <CodeLine indent={1}>
                <Operator>{'}'}</Operator>
              </CodeLine>

              <CodeLine>
                <Operator>{'}'}</Operator>
                <Operator>;</Operator>
                {showCursor && (
                  <span className="inline-block w-2 h-5 bg-pink-400 ml-1 animate-pulse">|</span>
                )}
              </CodeLine>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTerminal;
