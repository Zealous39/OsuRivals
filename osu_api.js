import dotenv from 'dotenv'
dotenv.config()

async function getLegacyUser(user, mode = 0) {
  // mode: 0 = osu!, 1 = Taiko, 2 = Catch, 3 = Mania
  const url = `https://osu.ppy.sh/api/get_user?k=${process.env.OSU_API_KEY}&u=${user}&m=${mode}`;
}
async function getLegacyUser_Top100(user, mode = 0) {
  // mode: 0 = osu!, 1 = Taiko, 2 = Catch, 3 = Mania
  const url = `https://osu.ppy.sh/api/get_user?k=${process.env.OSU_API_KEY}&u=${user}&m=${mode}`;
}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();

    if (data.length === 0) {
      console.log('User not found.');
      return;
    }

    const userData = data[0];
    console.log(`User_id: ${userData.user_id}`);
    console.log(`User: ${userData.username}`);
    console.log(`Rank: #${userData.pp_rank}`);
    console.log(`PP: ${userData.pp_raw}`);
  } catch (error) {
    console.error('API Error:', error.message);
  }


// Search by username or user ID:
getLegacyUser('mrekk');