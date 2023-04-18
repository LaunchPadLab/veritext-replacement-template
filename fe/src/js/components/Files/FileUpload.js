import React, { useRef, useState } from 'react'
import AWS from 'aws-sdk'
import axios from 'axios'

const FileUpload = () => {
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef(null)

  const handleUploadClick = async () => {
    if (uploading) return
    const files = fileInputRef.current.files

    if (!files.length) return

    setUploading(true)

    try {
      const s3 = new AWS.S3({
        // Your AWS S3 configuration here
      })

      const uploadPromises = []
      const fileUrls = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const params = {
          Bucket: 'your-bucket-name',
          Key: file.name,
          Body: file,
          ACL: 'public-read', // Change this if necessary
        }
        const uploadPromise = s3.upload(params).promise()
        uploadPromises.push(uploadPromise)
      }
      const uploadResponses = await Promise.all(uploadPromises)

      console.log('Files uploaded successfully!')

      for (let i = 0; i < uploadResponses.length; i++) {
        const uploadedFile = uploadResponses[i]
        const fileUrl = `https://your-bucket-name.s3.amazonaws.com/${uploadedFile.Key}`
        fileUrls.push(fileUrl)
      }

      // After the files have been uploaded, send a POST request to the backend endpoint with the S3 file paths
      const response = await axios.post('/your-backend-endpoint', {
        files: fileUrls,
      })
      console.log('POST request sent successfully!', response.data)
    } catch (err) {
      console.error(err)
    } finally {
      setUploading(false)
      fileInputRef.current.value = ''
    }
  }

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleUploadClick}
        multiple
      />
      <button disabled={uploading} onClick={() => fileInputRef.current.click()}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  )
}

export default FileUpload
