interface FileUploadProps {
    type: string;
    onFileSelect: (type: string, files: File[]) => void;
  }
  
  const FileUpload = ({ type, onFileSelect }: FileUploadProps) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      onFileSelect(type, files);
    };
    return (
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border mt-2 file:text-sm file:font-semibold file:bg-transparent file:text-gray-300 hover:file:cursor-pointer hover:file:text-[#5CFEF0]"
        />
      </div>
    );
  };
  
  export default FileUpload;