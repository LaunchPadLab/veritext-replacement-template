import React, { useState } from 'react'
import AWS from 'aws-sdk'

const FileUpload = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleUploadClick = async () => {
    if (!file) return
    setUploading(true)

    try {
      const s3 = new AWS.S3({
        // Your AWS S3 configuration here
      })

      const params = {
        Bucket: 'your-bucket-name',
        Key: file.name,
        Body: file,
        ACL: 'public-read', // Change this if necessary
      }

      await s3.upload(params).promise()
      console.log('File uploaded successfully!')
    } catch (err) {
      console.error(err)
    } finally {
      setUploading(false)
      setFile(null)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button disabled={uploading} onClick={handleUploadClick}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  )
}

export default FileUpload
