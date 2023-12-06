import React from 'react';

export function Home() {
  return (
    <main className="content">
      <div className="blockquote text-center">
        <h1 className="display-4 p-3">About Snatch Solutions</h1>
        <div className="pad-text">
          <p>Snatch Bank is the answer to a budgeting conundrum I have run into time and time again.</p>
          <p>I am a strong proponent of wise money management. However, I have found that existing budgeting solutions do not fit my needs. Some are too intensive, others do not provide me with the customizeability, speed or analytics that I would like.</p>
          <p>Thus, I present Snatch Bank, created to address the limiting issues of competitor solutions, and enable you to manage your finances as intelligently, fluidly, and comfortably as possible.</p>
          <p>I hope you enjoy using this solution as much as I enjoyed creating it.</p>
        </div>
      </div>

      <div className="blockquote text-center">
        <h1 className="display-4 p-3">About Me</h1>
        <div className="pad-text">
          <p>My name is Chase Bledsoe! I am a Computer Science Major at Brigham Young University.</p>
          <p>I love software development because of the combination of creativity and critical thinking it allows me to express.</p>
        </div>
        <div>
          <img className="mar-pic" src="/snatch.png" alt="Our mascot Snatch" width="200rem"/>
          <img className="mar-pic" src="/me.png" alt="A picture of me!" width="200rem"/>
        </div>
      </div>
    </main>
  );
}