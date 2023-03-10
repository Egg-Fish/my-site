import useTime from "../../hooks/useTime";
import Text from "../../components/text/Text";

function Digit({value, height}) {
    if (value === undefined) value = 0;

    // let zero = <div className="rounded-full bg-[#14213d] w-[2em] h-[2em]"></div>;
    let zero = <div className="rounded-full border-4 border-[#606c38] w-[2em] h-[2em]"></div>
    let one = <div className="rounded-full bg-[#606c38] w-[2em] h-[2em]"></div>;

    value = typeof(value) === "string" ? parseInt(value) : value;

    let binary_value = Array.from(value.toString(2)).reverse();

    let bits = [];

    for (var i = 0; i < height; i++) {
        let bit_value = binary_value[i];

        if (bit_value === undefined) bit_value = '0';

        bits.push(
            <div style={{"gridRow" : `${4 - i}`}} key={Math.random()}>
                {bit_value === '0' ? zero : one}
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-rows-4 w-[2em] gap-2 items-center row-start-1">
                {bits}
            </div>
            <Text className="
            opacity-0 group-hover:opacity-50 
            transition-all ease-in-out duration-200
            text-[1em]">{value}</Text>
        </>
    );

}


export function BinaryClock() {
    let time = useTime(500);

    let date = new Date(time);

    let hours = Array.from("00" + date.getHours().toString()).slice(-2);
    let minutes = Array.from("00" + date.getMinutes().toString()).slice(-2);
    let seconds = Array.from("00" + date.getSeconds().toString()).slice(-2);

    // console.log(date.getDate());
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    return (
        <div className="w-full h-full group">
            <div className="
            grid grid-cols-6 grid-rows-[auto_2em] grid-flow-col
            gap-5 p-5 
            h-full w-full 
            justify-items-center">
                <Digit value={hours[0]} height={2}/>
                <Digit value={hours[1]} height={4}/>
                <Digit value={minutes[0]} height={3}/>
                <Digit value={minutes[1]} height={4}/>
                <Digit value={seconds[0]} height={3}/>
                <Digit value={seconds[1]} height={4}/>
            </div>
        </div>
    );
}

export default BinaryClock;