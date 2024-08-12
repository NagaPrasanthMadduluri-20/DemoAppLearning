export async function getUsers(page_slug, lang) {
  //console.log("page_slug", page_slug);
    try {
      const endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/GENERIC%20CATEGORY/${page_slug}?geoLocation=us&current_url=http://localhost:9091/${page_slug}/`;
      const res = await fetch(endpoint);
      const data = await res.json();
      console.log("data1111", data);
      if (!data) {
        throw new Error('Failed to fetch users');
      }
      return { users: data, error: null };
    } catch (error) {
      return { users: null, error: error.message || 'Failed to fetch users' };
    }
  }
  
  export async function getUserById(page_slug, lang) {
    console.log("page_slug2", page_slug);
    try {
      const endpoint = `https://stagingalpha.invensislearning.com/api/get-dynamic-page-details/COURSE%20COUNTRY/${page_slug}/us?current_url=http://localhost:9091/us/${page_slug}/&geoLocation=us`;
      const res = await fetch(endpoint);
      const data = await res.json();
      if (!data) {
        throw new Error('User not found');
      }
     // console.log("data2", data);
      return { user: data, error: null };
    } catch (error) {
      return { user: null, error: error.message || 'Failed to fetch user' };
    }
  }
  
  export async function getTodosByUserId(id) {
    try {
      const endpoint = `https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users/${id}/todos`;
      const res = await fetch(endpoint);
      const data = await res.json();
  
      if (!data) {
        throw new Error('Todos not found');
      }
  
      return { todos: data, error: null };
    } catch (error) {
      return { todos: null, error: error.message || 'Failed to fetch todos' };
    }
  }
  