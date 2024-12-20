export function setupForm(element) {
  let regions = [];

  const formHTML = `
    <form id="userForm" class="form-container">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="region">Region:</label>
        <select id="region" name="region" required>
          <option value="">Select a region</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  `;

  element.innerHTML = formHTML;

  const form = document.getElementById('userForm');
  const regionSelect = document.getElementById('region');

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
      name: form.name.value,
      email: form.email.value,
      region: regions.find(r => r.value === form.region.value)
    };
    console.log('Form submitted:', formData);
  });

  return { form, regionSelect };
}