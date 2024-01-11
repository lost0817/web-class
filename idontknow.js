document.addEventListener('DOMContentLoaded', function () {
    const gameIdentifier = getParameterByName('game');
    const serverEndpoint = '/getData';
    fetch(serverEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('NeDB data from server:', data);
            const matchingData = data.find(item => item.class === gameIdentifier);
            const story_CH = document.getElementById('story_CH');
            const CG = document.getElementById('CG');
            if (matchingData) {
                story_CH.innerHTML = matchingData.story.CH;
                character_introduce(matchingData);
            } else {
                console.log('No matching data found for gameIdentifier:', gameIdentifier);
            }
            function character_introduce() {
                for (let i = 0; i < randomizedIndices.length; i++) {
                    const randomizedIndex = randomizedIndices[i];
                    const characterContainer3 = document.createElement('div');
                    let imgElement;
                    if (CG) {
                        const CGPath = `../image/i${randomizedIndex}.jpg`;
                        imgElement = document.createElement('img');
                        const imgCheck = new Image();
                        imgCheck.src = CGPath;
                        imgCheck.onload = function () {
                            imgElement.src = CGPath;
                            characterContainer3.appendChild(imgElement);
                        };
                    }
                    // 將 characterContainer1 附加到 DOM 中
                    document.getElementById('CG').appendChild(characterContainer3);
                }
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}
