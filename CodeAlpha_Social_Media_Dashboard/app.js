 // Function to handle login form submission
 function login(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication
    if (username === 'admin' && password === '') {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('feedsContainer').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

// Function to fetch Facebook feed (simulated data)
function fetchFacebookFeed() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const feedData = posts.slice(0, 3).map(post => ({
                id: post.id,
                message: post.title,
                image: `https://picsum.photos/id/${post.id}/200/200`
            }));
            displayFeed(feedData, 'facebookPosts');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error occurred while fetching Facebook feed.');
        });
}

// Function to fetch Twitter feed (simulated data)
function fetchTwitterFeed() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const feedData = posts.slice(3, 6).map(post => ({
                id: post.id,
                message: post.title,
                image: `https://picsum.photos/id/${post.id}/200/200`
            }));
            displayFeed(feedData, 'twitterPosts');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error occurred while fetching Twitter feed.');
        });
}

// Function to fetch Instagram feed (simulated data)
function fetchInstagramFeed() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const feedData = posts.slice(6, 9).map(post => ({
                id: post.id,
                message: post.title,
                image: `https://picsum.photos/id/${post.id}/200/200`
            }));
            displayFeed(feedData, 'instagramPosts');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error occurred while fetching Instagram feed.');
        });
}

// Function to display feed on the page
function displayFeed(feedData, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous posts
    feedData.forEach(post => {
        const col = document.createElement('div');
        col.classList.add('col-md-4');
        const card = document.createElement('div');
        card.classList.add('card', 'post-card');
        card.innerHTML = `
            <img src="${post.image}" class="card-img-top" alt="Image">
            <div class="card-body">
                <p class="card-text">${post.message}</p>
            </div>
        `;
        col.appendChild(card);
        container.appendChild(col);
    });





}