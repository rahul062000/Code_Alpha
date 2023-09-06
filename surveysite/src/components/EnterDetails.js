import { useNavigate } from 'react-router-dom';

export default function EnteredDetails(props) {
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = () => {
    console.log(props.data); // Log basicData object
    console.log(props.questiondData); // Log questionData object
    navigate('/thanks'); // Navigate to the thanks page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="max-w-md w-full md:w-3/4 lg:w-1/2 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div className="mt-3">
          <div className="card text-left h-full">
            <div className="card-body my-3">
            <label className="block text-lg font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
          Basic Details
        </label>

              {/* Display basicData */}
              <p className="mb-2">
                <b>Name:</b> {props.data.name} {props.data.last}
              </p>
              <p className="mb-2">
                <b>Email:</b> {props.data.email}
              </p>
              <p className="mb-4">
                <b>Contact No.:</b> {props.data.contact}
              </p>

              <label className="block text-lg font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
        Additional Details
      </label>

              {/* Display questionData */}
              <p className="mb-2">
                <b>Profession:</b> {props.questiondData.profession}
              </p>
              <p className="mb-2">
                <b>Interests:</b> {props.questiondData.interest}
              </p>
              <p className="mb-4">
                <b>Reference:</b> {props.questiondData.reference}
              </p>

              {/* Submit button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={submit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

