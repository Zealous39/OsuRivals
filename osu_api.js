import dotenv from 'dotenv'
dotenv.config()

async function getLegacyUserData(user, mode = 0)
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
    console.log(`User_id: ${userData.user_id}`);
    console.log(`User: ${userData.username}`);
    console.log(`Rank: #${userData.pp_rank}`);
    console.log(`PP: ${userData.pp_raw}`);
  } catch (error) {
    console.error('API Error:', error.message);
  }
}

async function getLegacyUserDataTop100(user, mode = 3, limit = 100)
{
  // mode: 0 = osu!, 1 = Taiko, 2 = Catch, 3 = Mania
  const url = `https://osu.ppy.sh/api/get_user_best?k=${process.env.OSU_API_KEY}&u=${user}&m=${mode}&limit=${limit}`
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();

    if (data.length === 0) {
      console.log('User not found.');
    }
  for (let i = 0; i < 100; i++)
  {
    let userDataTop100 = data[i];
    console.log("Score: ", i + 1);
    console.log(`beatmap_id: ${userDataTop100.beatmap_id}`);
    console.log(`pp: ${userDataTop100.pp}`);
    console.log("");
  }
  } catch (error) {
    console.error('API Error:', error.message);
  }
}

// Search by username or user ID:
getLegacyUserDataTop100('Zeal_');