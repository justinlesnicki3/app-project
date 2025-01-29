import { ID, Account, Client } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aora',
    projectId: '67999d880038c33f3933',
    databaseId: '6799a2000000ee981de9',
    userCollectionId: '6799a24200259dfb507f',
    videoCollectionId: '6799a28500194161cb59',
    storageId: '6799a7a8001ad2fbb123'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 

const account = new Account(client);

export const createUser = () => {
    // Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
}


