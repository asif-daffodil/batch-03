
const Message = ({sn, text}) => {
    
    return (
        <div className="text-2xl text-fuchsia-600" >
            {sn} : {text}
        </div>
    );
};

export default Message;