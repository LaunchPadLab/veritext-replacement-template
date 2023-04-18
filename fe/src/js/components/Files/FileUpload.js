import React, { useRef, useState } from 'react'
import AWS from 'aws-sdk'

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
      await Promise.all(uploadPromises)

      console.log('Files uploaded successfully!')
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
