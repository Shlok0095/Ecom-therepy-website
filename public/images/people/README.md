# People Images Directory

## How to Add Person Images

1. **Place your images here**: Add person photos to this directory (`public/images/people/`)

2. **Recommended image format**:
   - File format: `.jpg`, `.jpeg`, or `.png`
   - Recommended size: 400x400 pixels (square images work best)
   - File size: Keep under 500KB for faster loading

3. **Naming convention**: Use descriptive names like:
   - `john-doe.jpg`
   - `jane-smith.jpg`
   - `mike-johnson.jpg`
   - etc.

4. **Update the component**: After adding images, update the `image` property in `src/components/Peoples/Peoples.jsx`:
   ```javascript
   image: '/images/people/john-doe.jpg'
   ```

## Example:
If you add an image named `john-doe.jpg` in this folder, reference it in the component as:
```javascript
image: '/images/people/john-doe.jpg'
```

Note: Images in the `public` folder are served from the root URL, so `/images/people/filename.jpg` will work.


