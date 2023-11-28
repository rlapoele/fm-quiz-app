

export default function ProgressIndicator(props) {

  return (

    <div role="progressbar"
         class="rounded-full bg-secondary dark:bg-secondary-dark w-full p-0.25"
         aria-valuemin="0"
         aria-valuemax="100"
         aria-valuenow={props.progressPercentage}>
      <div class="rounded-full bg-purple h-0.5" style={`width: ${props.progressPercentage}%`}></div>
    </div>

  );
}
