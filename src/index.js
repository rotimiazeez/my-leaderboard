import './style.css';

const score = document.querySelector('.score');
const formDiv = document.querySelector('.form-div');

score.innerHTML = `<div class="header-score">
                    <h2 class="recent-score">Recent Scores</h2>
                    <div class="refresh-btn">
                      <button class="refresh" type="submit">Refresh</button>
                    </div>
                  </div>
                  <div class="score-results">
                    <ul class="result-ul">
                      <li class="result-li">Name: 100</li>
                      <li class="result-li">Name: 20</li>
                      <li class="result-li">Name: 50</li>
                      <li class="result-li">Name: 78</li>
                      <li class="result-li">Name: 125</li>
                      <li class="result-li">Name: 77</li>
                      <li class="result-li">Name: 42</li>
                    </ul>
                  </div>`;

formDiv.innerHTML = `<form action="#" class="form">
                        <h2 class="form-title">Add your score</h2>
                        <div class="form-inputs">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div class="form-inputs">
                          <input
                            type="text"
                            name="score"
                            id="score"
                            placeholder="Your Score"
                          />
                        </div>
                        <div class="submit-form">
                          <button type="submit" class="submit-score">Submit</button>
                        </div>
                      </form>`;