import React from 'react'
import { useShowToast } from './useShowToast'
import { useState } from 'react'


const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const showToast = useShowToast()
  const maxFileSizeInBytes = 2 * 1024 * 1024 // 2 MB

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      if (file.size > maxFileSizeInBytes) {
        showToast('Error', 'File size exceeds the limit of 2 MB')
        setSelectedFile(null)
        return
      }
      const reader = new FileReader()

      reader.onload = () => {
        setSelectedFile(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
        showToast('Error', 'Invalid file type. Only images are allowed')
        setSelectedFile(null)
    }
  }

  return { selectedFile, handleImageChange, setSelectedFile }

}

export default usePreviewImg