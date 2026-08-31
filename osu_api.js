import dotenv from 'dotenv'
dotenv.config()

const getLegacyUserTop100 = async (user, mode = 0, limit = 1) => {
  // mode: 0 = osu!, 1 = Taiko, 2 = Catch, 3 = Mania
  const url = `https://osu.ppy.sh/api/get_user_best?k=${process.env.OSU_API_KEY}&u=${user}&m=${mode}&limit=${limit}`
}
export const getLegacyUserData = async (user, mode = 0) =>
{
  // mode: 0 = osu!, 1 = Taiko, 2 = Catch, 3 = Mania
  const url = `https://osu.ppy.sh/api/get_user?k=${process.env.OSU_API_KEY}&u=${user}&m=${mode}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();

    if (data.length === 0) {
      console.log('User not found.');
    }

    const userData = data[0];

    return {
      'User_id': userData.user_id,
      'User': userData.username,
      'Rank': userData.pp_rank,
      'PP': userData.pp_raw
    }
    console.log(`User_id: ${userData.user_id}`);
    console.log(`User: ${userData.username}`);
    console.log(`Rank: #${userData.pp_rank}`);
    console.log(`PP: ${userData.pp_raw}`);
  } catch (error) {
    console.error('API Error:', error.message);
  }
}

// Search by username or user ID:
