'use strict';

// 1. import styles when env === dev else use extractfilewebpackplugin
const css = require('../sass/main.scss');

// DOM REFS
const DOM = {
    scorecards: document.getElementById('scorecards')
}

// CHARACTER REFERENCE (USELESS / ONLY FOR CONVENIENCE & REFERENCE)
const characters = [
    'jon snow',
    'daenerys',
    'cersei',
    'jaime',
    'tyrion',
    'sansa',
    'arya',
    'bran',
    'littlefinger',
    'varys',
    'the hound',
    'the mountain',
    'the night king',
    'davos',
    'brienne',
    'bronn',
    'grey worm',
    'melisandre',
    'theon',
    'yara'
    // 'tormun giantsbane'
]

// SCORING REFERENCE
const scoring = {
    violence: {
        killRandomCharacter: 10,
        killMainCharacter: 20,
        killWhiteWalker: 50,
        killedByWhiteWalker: 50,
        killKing: 100,
        killDragon: 200,
        getKilled: 100
    },
    sex: {
        sexWithRandomCharacter: 10,
        sexWithMainCharacter: 40,
        watchSex: 10,
        getNaked: 100
    },
    status: {
        takeIronThrone: 500,
        loseIronThrone: -500,
        resurrect: 100,
        conceive: 50,
        getEngaged: 20,
        getMarried: 50,
        haveVision: 10
    },
    consumption: {
        eatOrDrink: 10
    }
}

// PLAYERS AND THEIR DRAFT PICKS
const players = [
    {
        name: 'cam',
        draftPicks: ['jon snow', 'daenerys', 'cersei', 'jaime', 'bronn']
    },
    {
        name: 'shelby',
        draftPicks: ['tyrion', 'sansa', 'arya', 'bran', 'grey worm']
    },
    {
        name: 'dallen',
        draftPicks: ['littlefinger', 'varys', 'the hound', 'the mountain', 'melisandre']
    },
    {
        name: 'shalyse',
        draftPicks: ['the night king', 'davos', 'brienne', 'theon', 'yara']
    }
]

// CHARACTER TALLIES ( ** UPDATE ME AFTER EACH SHOW ** )
const characterTallies = [
    // jon snow
    {
        name: 'jon snow',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 8,
                killMainCharacter: 2,
                killWhiteWalker: 7,
                killedByWhiteWalker: 0,
                killKing: 1,
                killDragon: 1,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 1,
                loseIronThrone: 0,
                resurrect: 1,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 1
            }
        }
    },
    // daenerys targaryen
    {
        name: 'daenerys',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 2,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 2
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // cersei lannister
    {
        name: 'cersei',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 1
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 1,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // jaime lannister
    {
        name: 'jaime',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 4,
                killMainCharacter: 2,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 1,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 1,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 2
            }
        }
    },
    // tyrion lannister
    {
        name: 'tyrion',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 1,
                killWhiteWalker: 2,
                killedByWhiteWalker: 0,
                killKing: 2,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 3
            },
            consumption: {
                eatOrDrink: 100
            }
        }
    },
    // sansa stark
    {
        name: 'sansa',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 1,
                getMarried: 1,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 1
            }
        }
    },
    // arya stark
    {
        name: 'arya',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 2,
                killMainCharacter: 4,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 1
            }
        }
    },
    // bran stark
    {
        name: 'bran',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // littlefinger
    {
        name: 'littlefinger',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // varys
    {
        name: 'varys',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // the hound
    {
        name: 'the hound',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // the mountain
    {
        name: 'the mountain',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // the night king
    {
        name: 'the night king',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // davos seaworth
    {
        name: 'davos',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // brienne of tarth
    {
        name: 'brienne',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // bronn
    {
        name: 'bronn',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // grey worm
    {
        name: 'grey worm',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 15,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // melisandre
    {
        name: 'melisandre',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // theon greyjoy
    {
        name: 'theon',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    },
    // yara greyjoy
    {
        name: 'yara',
        totalPoints: null,
        scorecard: {
            violence: {
                killRandomCharacter: 0,
                killMainCharacter: 0,
                killWhiteWalker: 0,
                killedByWhiteWalker: 0,
                killKing: 0,
                killDragon: 0,
                getKilled: 0
            },
            sex: {
                sexWithRandomCharacter: 0,
                sexWithMainCharacter: 0,
                watchSex: 0,
                getNaked: 0
            },
            status: {
                takeIronThrone: 0,
                loseIronThrone: 0,
                resurrect: 0,
                conceive: 0,
                getEngaged: 0,
                getMarried: 0,
                haveVision: 0
            },
            consumption: {
                eatOrDrink: 0
            }
        }
    }

]

// UPDATED CHARACTER SCORECARDS
const characterScorecards = getCharacterScorecards();

// UPDATED PLAYER SCORECARDS
const playerScorecards = getPlayerScorecards();

// METHODS
function getCharacterScorecards () {
    let characterScorecards = characterTallies;
    characterScorecards.forEach(character => {
        character.totalPoints = 0;
        // multiply all score tallies by corresponding point reference
        for (let criteria in character.scorecard) {
            let totalCriteria = `total${criteria.charAt(0).toUpperCase() + criteria.slice(1)}`;
            character[totalCriteria] = 0;
            for (let score in character.scorecard[criteria]) {
                character.scorecard[criteria][score] = character.scorecard[criteria][score] * scoring[criteria][score];
                character.totalPoints += character.scorecard[criteria][score];
                character[totalCriteria] += character.scorecard[criteria][score];
            }
        }
    });
    return characterScorecards;
}
function getPlayerScorecards () {
    let playerScorecards = [];
    players.forEach(player => {
        let playerScorecard = {};
        playerScorecard.name = player.name;
        playerScorecard.team = characterScorecards.filter(characterScorecard => {
            if (player.draftPicks.indexOf(characterScorecard.name) !== -1) {
                return characterScorecard;
            }
        }).sort((a, b) => {
            return b.totalPoints - a.totalPoints;
        });
        for (let criteria in scoring) {
            let totalCriteria = `total${criteria.charAt(0).toUpperCase() + criteria.slice(1)}`;
            playerScorecard[totalCriteria] = 0;
            playerScorecard.team.forEach(member => {
                playerScorecard[totalCriteria] += member[totalCriteria];
            });
        }
        playerScorecard.totalPoints = 0;
        playerScorecard.open = false;
        playerScorecard.team.forEach(teamMember => {
            playerScorecard.totalPoints += teamMember.totalPoints;
        });
        playerScorecards.push(playerScorecard);
    });
    for (let criteria in scoring) {
        let mostCriteria = `most${criteria.charAt(0).toUpperCase() + criteria.slice(1)}`;
        let totalCriteria = `total${criteria.charAt(0).toUpperCase() + criteria.slice(1)}`;
        playerScorecards.forEach(scorecard => {
            scorecard[mostCriteria] = false;
        });
        let criteriaRankings = playerScorecards.sort((a, b) => {
            return b[totalCriteria] - a[totalCriteria];
        });
        if (criteriaRankings[0][totalCriteria] > criteriaRankings[1][totalCriteria]) {
            criteriaRankings[0][mostCriteria] = true;
        }
    }
    return playerScorecards.sort((a, b) => {
        return b.totalPoints - a.totalPoints;
    });
}
function loadPlayerScorecards () {
    playerScorecards.forEach((scorecard, index) => {

        let templateRoot = document.createElement('DIV');
        templateRoot.setAttribute('class', 'scorecard');

        let getTeamMembers = function () {
            let membersTemplate = '';
            scorecard.team.forEach((member, index) => {
                if (index === 0 && member.totalPoints > scorecard.team[1].totalPoints) {
                    membersTemplate += `<th class="team-mvp">${ member.name }</th>`;
                } else {
                    membersTemplate += `<th>${ member.name }</th>`;
                }
            });
            return membersTemplate;
        }

        let getCriteriaAndScoreItems = function () {

            // score items template
            let getScoreItems = function (criteria, criteriaItems) {
                let scoreItemTemplate = '';
                let rowTotal = 0;
                let bestColumnScore = 0;
                scorecard.team.forEach(member => {
                    let columnScore = member.scorecard[criteria][criteriaItems];
                    if (columnScore !== 0 && columnScore > bestColumnScore) {
                        bestColumnScore = columnScore;
                    }
                    rowTotal += columnScore;
                    scoreItemTemplate += `<td>${ columnScore }</td>`;
                });
                let rowTotalTemplate = `<td class="row-total">${ rowTotal }</td>`;
                /* uncomment for row total
                return scoreItemTemplate + rowTotalTemplate; */
                return scoreItemTemplate;
            }

            // criteria item template
            let getCriteriaItems = function (criteria) {
                let criteriaItemTemplate = '';
                for (let criteriaItems in scorecard.team[0].scorecard[criteria]) {
                    criteriaItemTemplate += `<tr class="score-items">
                    <td>${ unCamelize(criteriaItems) }</td>
                    ${ getScoreItems(criteria, criteriaItems) }
                    </tr>`;
                }
                return criteriaItemTemplate;
            }

            // column totals template
            let getColumnTotals = function () {
                let columnTotalsTemplate = '';
                scorecard.team.forEach(member => {
                    columnTotalsTemplate += `<td>${ member.totalPoints }</td>`;
                });
                // return columnTotalsTemplate + `<td>${ scorecard.totalPoints }</td>`;
                return columnTotalsTemplate;
            }

            // criteria and score items template
            let scoreTemplate = '';
            for (let criteria in scorecard.team[0].scorecard) {
                scoreTemplate += `<tr class="score-category">
                <td>${ criteria }</td>
                </tr>
                ${ getCriteriaItems(criteria) }`;
            }
            return scoreTemplate + `<tr class="column-totals"><td style="opacity: 0;">Totals:</td>${ getColumnTotals() }</tr>`;
        }

        let getAwards = function () {
            let awardsRootTemplate = '';
            let awards = [];
            for (let criteria in scoring) {
                let mostCriteria = `most${criteria.charAt(0).toUpperCase() + criteria.slice(1)}`;
                if (scorecard[mostCriteria]) {awards.push(mostCriteria);}
            }
            if (awards.length) {
                let loadAwards = function () {
                    let awardsTemplate = '';
                    awards.forEach(award => {
                        awardsTemplate += `<li class="${ unCamelize(award, '-') }">${ unCamelize(award) } - ${ commalizeNumber(scorecard[award.replace('most', 'total')]) }</li>`
                    });
                    return awardsTemplate;
                }
                awardsRootTemplate = `<ul class="awards"><li>Awards</li>${ loadAwards() }</ul>`;
            }
            return awardsRootTemplate;
        }

        let template = `<div class="overview">
        <div class="scorecard-name">${ scorecard.name }</div>
        <div>${ commalizeNumber(scorecard.totalPoints) }</div>
        </div>
        ${ getAwards() }
        <div class="team">
        <table>
        <tr class="team-members">
        <th style="opacity: 0;">Character:</th>
        ${ getTeamMembers() }
        <th style="opacity: 0; display: none;">Total:</th>
        </tr>
        ${ getCriteriaAndScoreItems() }
        </table>
        </div>`
        let toggleTeamEl = document.createElement('BUTTON');
        toggleTeamEl.setAttribute('class', 'team-toggle');
        toggleTeamEl.addEventListener('click', () => {toggleTeam(index)});
        templateRoot.innerHTML = template;
        templateRoot.appendChild(toggleTeamEl);
        DOM.scorecards.appendChild(templateRoot);
    });
}
function toggleTeam(index) {
    let thisCard = playerScorecards[index];
    if (thisCard.open) {
        DOM.scorecards.children[index].classList.remove('open-team');
        thisCard.open = false;
    } else {
        DOM.scorecards.children[index].classList.add('open-team');
        thisCard.open = true;
    }
}
function handleScroll () {
    for (let i = 0; i < DOM.scorecards.children.length; i++) {
        console.log('card ' + i + ' is : ' + DOM.scorecards.children[i].getBoundingClientRect().top)
    }
}
function init () {
    loadPlayerScorecards();
    // window.addEventListener('scroll', _.throttle(handleScroll, 100));
}

// UTILITY METHODS
function sortCharacterScorecards (key='totalPoints') {
    let sortedScorecards = characterScorecards.sort((a, b) => {
        return b[key] - a[key];
    });
    return sortedScorecards;
}
function unCamelize(text, separator = " ") {
    return text.replace(/[A-Z]/g, letter => separator + letter.toLowerCase()).replace("/^" + separator + "/", "");
}
function commalizeNumber(string) {
    return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// INIT
init();

let getDaDaData = new XMLHttpRequest();
getDaDaData.open('GET', `https://codepen.io/camstephensdomo/pen/EXMpEm.js`);
getDaDaData.onload = () => {
    if (getDaDaData.status === 200) {
        let daDaData = getDaDaData.responseText;
        console.log(daDaData);
    } else {
        console.log(`daDaData request failed. Returned status of ${getDaDaData.status}.`);
    }
}
getDaDaData.send();
