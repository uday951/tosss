let headsCount = 0;
let tailsCount = 0;

// Ensure the coin is in the initial heads position on page load
document.getElementById('coin').src = './head2.png';
document.getElementById('coin').style.transform = 'rotateY(0deg)';

document.getElementById('flip-button').addEventListener('click', function() {
    let coin = document.getElementById('coin');
    let totalFlips = 10; // Minimum number of flips
    let flipInterval = 100; // Initial speed of flip (in milliseconds)

    // Function to handle each flip
    function flipCoin() {
        // Perform one rotation (360 degrees)
        coin.style.transform = `rotateY(${totalFlips * 360}deg)`;

        // Decrease the speed of each subsequent flip
        setTimeout(function() {
            totalFlips++;

            if (totalFlips <= 20) { // Perform at least 20 flips
                flipInterval += 50; // Increase interval to slow down
                flipCoin(); // Recursively call flipCoin
            } else {
                // Once the flips are done, decide the outcome
                let result = Math.random() < 0.5 ? 'heads' : 'tails';
                
                if (result === 'heads') {
                    headsCount++;
                    coin.src = './head2.png';
                } else {
                    tailsCount++;
                    coin.src = './tail2.png';
                }

                document.getElementById('heads-count').textContent = headsCount;
                document.getElementById('tails-count').textContent = tailsCount;

                // Reset the rotation to 0deg after the coin lands
                coin.style.transform = 'rotateY(0deg)';
            }
        }, flipInterval); // Speed of the next flip
    }

    // Start the flipping process
    flipCoin();
});

document.getElementById('reset-button').addEventListener('click', function() {
    headsCount = 0;
    tailsCount = 0;
    document.getElementById('heads-count').textContent = headsCount;
    document.getElementById('tails-count').textContent = tailsCount;

    // Reset the coin image to heads and reset rotation to 0deg
    document.getElementById('coin').src = './head.jpeg';
    document.getElementById('coin').style.transform = 'rotateY(0deg)';
});
