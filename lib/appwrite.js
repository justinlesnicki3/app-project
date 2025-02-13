import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';
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
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    // Register User
    try {
    const newAccount = await account.create(
    ID.unique(),
    email,
    password,
    username
)

if(!newAccount) throw Error;

const avatarUrl = avatars.getInitials(username)

await signIn(email, password);

const newUser = await databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    ID.unique(),
    {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl
    }
)

    return newUser;

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
      const session = await account.createEmailPasswordSession(email, password)

      return session;
    } catch (error) {
        throw new Error(error);
    }
}
