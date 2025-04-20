# Accessing and Using Strapi

This guide provides detailed instructions on how to access and use the Strapi admin panel for managing your contact form and submissions.

## Accessing Strapi Admin Panel

Once Strapi is installed and running, you can access the admin panel through your web browser:

1. **Start Strapi**:
   ```bash
   cd strapi
   npm run develop
   ```

2. **Access the admin panel**:
   Open your browser and navigate to:
   ```
   http://localhost:1337/admin
   ```

3. **First-time setup**:
   - If this is your first time accessing Strapi, you'll be prompted to create an admin user
   - Fill in your details (name, email, password)
   - Click "Create" to create your admin account

4. **Login**:
   - Enter your email and password
   - Click "Login" to access the Strapi admin panel

## Strapi Admin Panel Overview

The Strapi admin panel is divided into several sections:

### Content Manager

This is where you'll manage your content, including contact form submissions:

1. **View submissions**:
   - Click on "Content Manager" in the left sidebar
   - Select "Contact Submissions" from the collection types list
   - Browse, filter, and search through submissions
   - Click on a submission to view details

2. **Manage form schema**:
   - Click on "Content Manager" in the left sidebar
   - Select "Contact Form Schema" from the single types list
   - Edit the JSON in the "fields" field to modify your form structure
   - Click "Save" to apply changes

### Content-Type Builder

This is where you'll create and modify your content types:

1. **Access Content-Type Builder**:
   - Click on "Content-Type Builder" in the left sidebar

2. **Create Contact Submission type**:
   - Click "Create new collection type"
   - Name it "Contact Submission"
   - Add fields as described in STRAPI_INTEGRATION.md
   - Click "Save" to create the type

3. **Create Contact Form Schema type**:
   - Click "Create new single type"
   - Name it "Contact Form Schema"
   - Add a JSON field named "fields"
   - Click "Save" to create the type

### Settings

This is where you'll configure permissions and API tokens:

1. **Configure permissions**:
   - Click on "Settings" in the left sidebar
   - Select "Roles" under "Users & Permissions plugin"
   - Click on "Public"
   - Enable necessary permissions for your content types
   - Click "Save" to apply changes

2. **Generate API token**:
   - Click on "Settings" in the left sidebar
   - Select "API Tokens"
   - Click "Create new API token"
   - Fill in the details and set permissions
   - Copy the generated token and add it to your .env.local file

## Managing Contact Form

### Modifying Form Fields

To modify the form fields that appear on your website:

1. Go to "Content Manager" > "Contact Form Schema"
2. Edit the JSON in the "fields" field
3. The JSON structure should follow this format:
   ```json
   [
     {
       "name": "fieldName",
       "type": "fieldType",
       "required": true/false,
       "label": "Field Label",
       "options": [
         { "value": "option1", "label": "Option 1" },
         { "value": "option2", "label": "Option 2" }
       ]
     }
   ]
   ```
4. Supported field types:
   - `text`: Text input field
   - `email`: Email input field
   - `tel`: Telephone input field
   - `number`: Number input field
   - `date`: Date input field
   - `select`: Dropdown select field (requires options)
   - `textarea`: Multi-line text area
   - `checkbox`: Checkbox field
5. Click "Save" to apply changes

### Managing Submissions

To view and manage contact form submissions:

1. Go to "Content Manager" > "Contact Submissions"
2. You'll see a list of all submissions
3. Use the filters and search to find specific submissions
4. Click on a submission to view details
5. You can update the status of a submission:
   - New: Just received
   - In Progress: Being worked on
   - Responded: Response sent to the submitter
   - Closed: Issue resolved
6. Add notes to track communication with the submitter

## Troubleshooting

### Strapi Won't Start

If Strapi won't start, try these steps:

1. Check if the port is already in use:
   ```bash
   lsof -i :1337
   ```
   If it is, kill the process or use a different port

2. Check for database issues:
   - By default, Strapi uses SQLite
   - Check if the database file exists and is not corrupted
   - Try deleting the .tmp folder in the strapi directory

3. Check for Node.js version compatibility:
   - Strapi requires Node.js 14.x, 16.x, or 18.x
   - Check your Node.js version with `node -v`

### Can't Access Admin Panel

If you can't access the admin panel:

1. Make sure Strapi is running
2. Check the URL: http://localhost:1337/admin
3. Clear your browser cache
4. Try a different browser

### API Token Not Working

If your API token is not working:

1. Make sure the token is correctly copied to your .env.local file
2. Check the token permissions in Strapi
3. Verify the token hasn't expired
4. Generate a new token if necessary

## Additional Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Content Types Guide](https://docs.strapi.io/user-docs/content-type-builder)
- [Strapi Permissions Guide](https://docs.strapi.io/user-docs/users-roles-permissions)
- [Strapi API Tokens Guide](https://docs.strapi.io/user-docs/settings/API-tokens)
