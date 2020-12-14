var firebaseConfig;

// *******
// *   my data: input 'my'
// * team data: input 'team'
selectDataBase('team');

function selectDataBase(sel){
    switch(sel){
        case 'my':
            myDatabase();
            break;
        case 'team':
            teamDatabase();
            break;
    }
}

// *************************
// * database
// * this is my database for test
function myDatabase(){
    firebaseConfig = {
        apiKey: "AIzaSyCV8A8nqecHDZ5V4efdg6bzzfaqmrbkZHI",
        authDomain: "test-firebase-f8f30.firebaseapp.com",
        databaseURL: "https://test-firebase-f8f30.firebaseio.com",
        projectId: "test-firebase-f8f30",
        storageBucket: "test-firebase-f8f30.appspot.com",
        messagingSenderId: "201101396393",
        appId: "1:201101396393:web:993c10047f3567d602dcb8",
        measurementId: "G-3N8YRVJCXJ"
    };
}

// ********************
// * databse
// * this is team's database
function teamDatabase(){
    firebaseConfig = {
        apiKey: "AIzaSyBPJCPaIpGDpxJHkGTcIZ1KZnWLa6HJo0o",
        authDomain: "studywithme-1234.firebaseapp.com",
        databaseURL: "https://studywithme-1234.firebaseio.com",
        projectId: "studywithme-1234",
        storageBucket: "studywithme-1234.appspot.com",
        messagingSenderId: "519334646298",
        appId: "1:519334646298:web:16bc469d51e4072bfb77a3",
        measurementId: "G-BM8W6EBSZY"
    };
}
