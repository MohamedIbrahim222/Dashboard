import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PublishQuiz() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

            <TableRow>
              <TableCell className="font-medium">
                <input type="checkbox" />
              </TableCell>
              <TableCell>mjihb</TableCell>
              <TableCell>kjhg</TableCell>
              <TableCell className="text-right">
                56+
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
              <input type="checkbox" />
              </TableCell>
              <TableCell>mjihb</TableCell>
              <TableCell>kjhg</TableCell>
              <TableCell className="text-right">
                56+
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
              <input type="checkbox" />
              </TableCell>
              <TableCell>mjihb</TableCell>
              <TableCell>kjhg</TableCell>
              <TableCell className="text-right">
                56+
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
              <input type="checkbox" />
              </TableCell>
              <TableCell>mjihb</TableCell>
              <TableCell>kjhg</TableCell>
              <TableCell className="text-right">
                56+
              </TableCell>
            </TableRow>
       
        </TableBody>
      </Table>
    </div>
  );
}
